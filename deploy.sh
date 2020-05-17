docker build -t sidorov/imed-client:latest -t sidorov/imed-client:$SHA -f ./client/Dockerfile ./client
docker build -t sidorov/imed-server:latest -t sidorov/imed-server:$SHA -f ./server/Dockerfile ./server

docker push sidorov/imed-client:latest
docker push sidorov/imed-server:latest

docker push sidorov/imed-client:$SHA
docker push sidorov/imed-server:$SHA

kubectl apply -f k8s
kubectl set image deployments/client-deployment client=sidorov/imed-client:$SHA
kubectl set image deployments/server-deployment server=sidorov/imed-server:$SHA
