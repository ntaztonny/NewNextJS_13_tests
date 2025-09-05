pipeline {
    agent any
nodejs("Node-20.10.0") {
    stages{
        dir('nextjs_13_beta_tests'){
        stage("build"){
            steps{
                echo "installing npm packages...."
                sh 'npm install'
                echo "building the application...."
                sh 'npm run build'  
            }
        }
         stage("test"){
            steps{
                echo 'Testing the application....'
                sh 'npm test'
            }
        }
         stage("deploy"){
            steps{
                echo 'Deploying the application....'
            }
        }
        }
    }
}

}