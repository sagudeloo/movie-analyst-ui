pipeline{
    agent any
    stages{
        stage("run-test"){
            steps {
                parallel {
                    run: {
                        echo "========executing run========"

                        sh """
                            export PORT="3030"
                            export BACK_HOST="localhost"
                            export BACK_HOST="3000"
                            export HOME=~/

                            npm start
                        """
                    }
                    mock_api:{
                        echo "========executing mock-api========"
                        sh """
                            npm run server
                        """
                    }
                    test:{
                        echo "========executing test========"
                        sh """
                            sleep 5000
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