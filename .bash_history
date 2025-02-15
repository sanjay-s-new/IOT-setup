clear
npm install -g aws-cdk
ç
apt-update
npm install -g aws-cdk
apt update
apt install nodejs npm -y
node -v
npm -v
npm install -g aws-cdk
cdk --version
mkdir my-iot-cdk
cd my-iot-cdk/
cd my-iot-cdk/
cdk init app --language=java
mvn package
apt install maven
mvn package
java -version
javac -version
apt install openjdk-11-jdk -y
docker ps
java -version
ls /usr/lib/jvm/
update-alternatives --config java
java -version
mvn package
ls /usr/lib/jvm/
update-alternatives --config java
ls -lrth
cat pom.xml 
cat pom.xml  | grep <maven.compiler.source>17</maven.compiler.source>
vim pom.xml 
cat pom.xml 
mvn clean package
ls -la
cat pom.xml 
cat pom.xml  | grep 11
cat pom.xml  | grep 17
vim pom.xml 
mvn package
cdk bootstrap
ls -la
cat cdk.json
cdk synth
cdk deploy
ls -lrth
cd src/
ls -la
cd main/
ls -la
cd java/
ls 
cd com/
ls
cd myorg/
ls
ls -la
cat MyIotCdkStack.java
vim MyIotCdkStack.java
cat MyIotCdkApp.java
vim MyIotCdkApp.java
cdk synth
cd ../../..
cd ../..
ls -la
cat cdk.json 
vim cdk.json 
cdk synth
ls -la
cp cdk.json cdk-bkup.json
vim cdk.json 
cdk synth
vim cdk.json 
cdk synth
ls -lrth
cat cdk-bkup.json
la -l
rm -rf cdk.json
cp cdk-bkup.json cdk.json
vim cdk.json 
cdk synth
cat cdk.json 
cdk synth
cdk bootstrap
cdk synth
cat pom.xml 
mvn clean install -U
ls -la
cd src/main/java/com/myorg/
ls -la
cat MyIotCdkApp.java
cat MyIotCdkStack.java
vim MyIotCdkStack.java
ls -la
vim MyIotCdkApp.java
mvn clean compile
cd ../../../
cd ../..
mvn clean compile
cdk synth
cdk deploy
export AWS_ACCOUNT_ID=$(aws sts get-caller-identity --query "Account" --output text)
aws configure
apt  install awscli
cd
apt  install awscli
apt update
apt upgrade -y
apt install awscli -y
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
apt install unzip
unzip awscliv2.zip
sudo ./aws/install
aws --version
aws configure
ls -lrth
cd aws/
ls -la
cd
cd aws/
ls -la
ls
cd
ls -lrth
aws configure
ls -lrth
c
d my-iot-cdk/
cd my-iot-cdk/
cdk deploy
history
cdk deploy
aws configure list
aws configure
aws configure list
ls -lrth
export CDK_DEFAULT_ACCOUNT=$(aws sts get-caller-identity --query "Account" --output text)
export CDK_DEFAULT_REGION=us-east-1  # Change to your AWS region
cd src/
ls -la
cd main/
cd java/com/myorg/
ls -la
cat MyIotCdkApp.java
cat MyIotCdkStack.java
vim MyIotCdkStack.java
cd ../../../..
cd ..
cdk deploy
cd src/main/java/com/myorg/
ls -la
cat MyIotCdkStack.java
vim MyIotCdkStack.java:
ls -la
vim MyIotCdkStack.java
mvn clean package
cd ../../../../
cd ..
mvn clean package
find /root/my-iot-cdk/src/main/java/com/myorg/ -name "MyIotCdkStack.java"
cd src/main/java/com/myorg/
ls -la
mvn clean package
cd ../../../../../
mvn clean package
grep -r "class MyIotCdkStack" /root/my-iot-cdk/src/main/java/com/myorg/
cd src/main/java/com/myorg/
lsla
ls -la
cat MyIotCdkApp.java 
cat MyIotCdkStack.java 
ls -la
vim MyIotCdkStack.java
mvn clean
cd
cd my-iot-cdk/
mvn clean
mvn package
cdk deploy
c
cd
aws configure
cdk deploy
ls -la
cd my-iot-cdk/
ls -al
cat cdk.json
vim cdk.json
cdk deploy
cdk bootstrap
cdk deploy
ls -la
cd src/main/java/com/myorg/
ls 0la
ls -la
cat MyIotCdkStack.java
vim  MyIotCdkStack.java
vim lambda
mvn clean package
cd ../../../../..
mvn clean package
cd src/main/java/com/myorg/
ls -lrth
cat MyIotCdkStack.java
vim MyIotCdkStack.java
cd ../../../../..
mvn clean package
cdk synth
pwd
mkdir -p lambda
echo 'exports.handler = async (event) => { console.log("Received event:", JSON.stringify(event, null, 2)); return "Success"; };' > lambda/index.js
cd src/main/java/com/myorg/
vim MyIotCdkStack.java
cd ../../../../..
mvn clean package
cdk synth
cdk deploy
cd src/main/java/com/myorg/
ls la
ls -la
vim MyIotCdkStack.java
cdk synth
cd ../../../../..
cdk synth
cdk deploy
cd src/main/java/com/myorg/
ls -la
vim MyIotCdkStack.java
cd ../../../../..
mvn clean package
cd src/main/java/com/myorg/
ls -lrth
vim MyIotCdkStack.java
cd ../../../../..
mvn clean package
cd src/main/java/com/myorg/
ls -la
cat MyIotCdkStack.java
vim MyIotCdkStack.java
cd ../../../../..
mvn clean package
cd src/main/java/com/myorg/
vim MyIotCdkStack.java
cd ../../../../..
mvn clean package
mvn clean
mvn clean package
mvn compile
cd src/main/java/com/myorg/
ls -lrth
catt MyIotCdkStack.java
cat MyIotCdkStack.java
vim MyIotCdkStack.java 
cd ../../../../..
mvn compile
mvn package
cdk synth
cdk bootstrap
cdk deploy
aws iot-data publish --topic "telemetry/data" --payload '{"temperature": 25}' --region your-region
aws iot-data publish --topic "telemetry/data" --payload '{"temperature": 25}' --region ap-south-1
aws iot-data publish     --topic "telemetry/data"     --payload '{"temperature": 25}'     --region ap-south-1     --cli-binary-format raw-in-base64-out
aws iot-data publish
aws iot-data publish --topic "telemetry/data"   --payload "$(echo -n '{"temperature": 25}' | base64)"   --region ap-south-1
aws iot-data publish --topic "telemetry/data"   --payload "$(echo -n '{"temperatur": 25}' | base64)"   --region ap-south-1
