pipeline{
    agent {
        docker {
            image 'timbru31/node-chrome:latest'
            args '-u root:root'
        }
    }
    stages{
        stage("setup"){
            steps{
                sh """
                    npm install
                """
            }
        }
        stage("run-test"){
            steps{
                echo "========executing run========"

                sh """
                    export PORT="3030"
                    export BACK_HOST="localhost"
                    export BACK_PORT="3000"
                    
                    npm run test
                """
            }
        }
    }
    post{
        always{
            deleteDir()
        }
        success{
            echo "========pipeline executed successfully ========"
        }
        failure{
            echo "========pipeline execution failed========"
        }
    }
}