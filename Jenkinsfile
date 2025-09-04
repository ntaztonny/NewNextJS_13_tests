pipeline {
    agent any

    stages{
        stage("build"){
            steps{
                echo "installing npm packages...."
                nodejs("Node-20.10.0") {
                    sh 'cd nextjs_13_beta_tests && npm install'
                    sh 'npm run build'
                }

                
            }
        }
         stage("test"){
            steps{
                echo 'Testing the application....'
            }
        }
         stage("deploy"){
            steps{
                echo 'Deploying the application....'
            }
        }
    }

}