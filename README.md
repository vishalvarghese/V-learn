# V-learn (Social media App)

Vlearn is a Community Classroom Web Application with the social media functionalities
like login/Signup(Users),Post,like,comment,
Video courses,User Profile,Chat 
and all other basic functionalities of an social media application.
Also Admin from Other side can manage all the activities in the client 
side with all required functions like post management,user management,report management and So on...


## API Reference



#### Get HomePage

```http
  GET /Vlearn.ml
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get Login/Register

```http
  GET /vlearn/signup
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |




#### Get all Post and notifications

```http
  GET /vlearn.ml/feed
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |


#### Get all Detail of chats

```http
  GET /vlearn.ml/chat
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |



#### Get all the connections and suggested users

```http
  GET /vlearn.ml/connections
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**.|Your API key


## Run Locally

Clone the project

```bash
  git clone https://github.com/vishalvarghese/vlearn.git
```

Go to the project directory

```bash
  cd client
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## 🚀 About Me
I'm Vishal varghese jans, full stack developer...


## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://vishalvarghese.github.io/portfolio/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/vishalvjans/)
