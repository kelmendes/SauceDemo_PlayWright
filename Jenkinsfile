pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                nodejs('NodeJS'){
                    npm install
                    npm run prod
                }
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}