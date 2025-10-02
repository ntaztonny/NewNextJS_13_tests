pipeline {
    agent any
    /**** To do **
    - Scripts
    - Parameters
    - Enviroment variables
    - tools 
    as additions to Jenkins    
    ***/
    /*environment {
       // if credentials, consider the credential plugin for secrete binding in the pipeline
       echo 'These are the environmental variables being used'
       SERVER_CREDENTIALS = credentials('global_ticketMarketplace_pipeline_credentials')
    }
    tools{
        echo "Here is a list of tools being used..."
    }
    parameters {
        echo "Here is a list of parameters being used!!"
    }
    
*/
 parameters{
    choice (name: 'VERSION', choices: ['1.0.0', '1.2.0', '1.3.0', '1.4.0'], description: '')
    booleanParam(name: 'executeTests', defaultValue: true, description: '')
 }
    stages{
        stage("build"){
            when{
                expression {
                   BRANCH_NAME =='master' 
                }
            }
            steps{
                nodejs("Node-20.10.0") {
                    dir('nextjs_13_beta_tests'){
                        echo "installing npm packages...."
                        sh 'npm install'
                        echo "building the application...."
                        sh 'npm run build'
                    }
                   
                }

                
            }
        }
         stage("test"){

            when{
                expression {
                    BRANCH_NAME == 'test' ||  BRANCH_NAME =='master' || params.executeTests == true
                }
            }
            steps{
                nodejs("Node-20.10.0") {
                    dir('nextjs_13_beta_tests'){
                        echo "testing the application...."
                        sh 'npm test'
                    }
                   
                }
            }
        }
         stage("deploy"){
            steps{
                echo "Deploying ${params.VERSION} of the application...."
            }
        }
    }
    
    post{
        always {
             echo 'Pipeline finished....'
        }
        success {
            echo 'Pipeline build, deploy successful....'
            // mail to: 'ntaztonny@yahoo.com',
            //      subject: "🚨 Deployment succedded: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
            //      body: "The build ${env.JOB_NAME},  build number ${env.BUILD_NUMBER} has succeded; please Check the build logs at: ${env.BUILD_URL}"
        }
        failure {
            echo 'Pipeline failed; A build, test, or deploy stage may have failed....'
            // mail to: 'atozpp@yahoo.com',
            //      subject: "🚨 Deployment Failed: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
            //      body: "The build ${env.JOB_NAME},  build number ${env.BUILD_NUMBER} has failed; please Check the build logs at: ${env.BUILD_URL}"

        }

}
}