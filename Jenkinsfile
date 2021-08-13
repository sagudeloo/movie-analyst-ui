pipeline{
    agent {
        docker {
            image 'timbru31/node-chrome:latest'
        }
    }
    stages{
        stage("setup"){
            steps{
                sh """
                    mkdir -p ${{WORKSPACE}}/.npm-global
                    npm config set prefix '${{WORKSPACE}}/.npm-global'
                    npm install
                    npm install pm2
                """
            }
        }
        stage("run-test"){
            // parallel {
            //     stage("run"){
                    steps{
                        echo "========executing run========"

                        sh """
                            export PORT="3030"
                            export BACK_HOST="localhost"
                            export BACK_HOST="3000"
                            export HOME=~/

                            pm2 start npm -- start
                            npm run server
                            sleep 5
                            npm run test
                        """
                    }
                // }
                // stage("mock-api"){
                //     steps{
                //         echo "========executing mock-api========"
                //         sh """
                //         """
                //     }
                // }
                // stage("test"){
                //     steps{
                //         echo "========executing test========"
                //         sh """
                //         """
                //     }
                // }
        //     }
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