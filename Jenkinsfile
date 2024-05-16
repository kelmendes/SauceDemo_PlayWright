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
                sh 'npx playwright install --with-deps'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing....'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}