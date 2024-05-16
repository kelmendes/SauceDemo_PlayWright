pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                nodejs('NodeJS'){
                    npm install
                    npm init playwright
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