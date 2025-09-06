pipeline {
    agent any
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
    }*/

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
                    BRANCH_NAME == 'test' ||  BRANCH_NAME =='master'
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
                echo 'Deploying the application....'
            }
        }
    }
    
    post{
        always {

        }
        success {

        }
        failur {

        }

}
}