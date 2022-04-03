# cg_terrain_project_team9

저희 조는 p5.js web editor 로 WEBGL로 프로젝트를 진행하였으며 
먼저 지난번 terrain 예제 소스코드를 이용하여 3차원 지형을 생성하였습니다.

3차원 지형의 변형에서 주제는 밤바다와 바다를 비추는 등대로 구성하였습니다.


##noise와 색을 수정하여 3차원 지형을 바다형태로 만들기
![image](https://user-images.githubusercontent.com/83346568/161428615-34b05ce8-420f-4fbf-b779-10610c0acaba.png)

##Camera()를 이용해 마우스를 누를 시 바다중앙을 확대하여 포커스를 맞추는 작업을 하였습니다.
![image](https://user-images.githubusercontent.com/83346568/161428694-1fba206d-d8be-4c74-a817-6bd0e766ee7d.png)

## ambientLight와 pointLight를 이용해 마우스에 움직임 따라 등대불빛 비추기
![image](https://user-images.githubusercontent.com/83346568/161428931-c349262b-740f-4b66-9568-6c586283ff34.png)
![image](https://user-images.githubusercontent.com/83346568/161428949-2318d2da-b6bf-431d-8663-b6e95104cf00.png)

##사물의 색 그대로 빛반사가 되어지는 ambientMaterial로 3D등대와 군함 상어지느러미 만들기
![image](https://user-images.githubusercontent.com/83346568/161429026-7e1ce90b-f12e-4487-a9af-d8fbeadf85fe.png)
군함은 왼쪽에서 오른쪽으로 움직이며 끝에 도착할 시 처음부터 다시 출발,
상어지느러미는등대불빛과 함께 마우스의 움직임에 따라 따라다니게 만듦.

