pipeline {
    agent any

    tools {nodejs "NodeJS"}

    stages {
        stage('Node Install') {
            steps {
                sh 'npm install'
            }
        }
        stage('Playwright Install') {
            steps {
                sh 'npx playwright install --with-deps chromium'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}