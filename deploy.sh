docker build -t sidorov/imed-server:latest -t sidorov/imed-server:$SHA -f ./server/Dockerfile ./server

docker push sidorov/imed-server:latest

docker push sidorov/imed-server:$SHA

kubectl apply -f k8s
kubectl set image deployments/server-deployment server=sidorov/imed-server:$SHA
