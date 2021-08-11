pipeline{
    agent {
        docker {
            image 'node:lts-alpine3.14'
            args '-p 3030:3030'
        }
    }
    stages{
        stage("run-test"){
            parallel {
                stage("run"){
                    steps{
                        echo "========executing run========"

                        sh """
                            export PORT="3030"
                            export BACK_HOST="localhost"
                            export BACK_HOST="3000"
                            export HOME=~/

                            npm install

                            npm start
                        """
                    }
                }
                stage("mock-api"){
                    steps{
                        echo "========executing mock-api========"
                        sh """
                            npm run server
                        """
                    }
                }
                stage("test"){
                    steps{
                        echo "========executing test========"
                        sh """
                            sleep 5
                            npm run test
                        """
                    }
                }
            }
        }
    }
    post{
        success{
            echo "========pipeline executed successfully ========"
        }
        failure{
            echo "========pipeline execution failed========"
        }
    }
}