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
                    export BACK_HOST="3000"
                    
                    npm run test
                """
                echo "========UI output========"
                sh """
                    curl localhost:3030/movies
                """
                echo "========Backend output========"
                sh """
                    curl localhost:3000/movies
                """
            }
        }
    }
    post{
        always{
            sh """
                cat json-server.log
            """
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