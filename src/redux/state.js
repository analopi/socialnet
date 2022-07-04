let state = {
  profilePage: {
    postData: [
      { id: 1, text: "Hello it's me", likesCount: 24 },
      { id: 2, text: "Hello it's don't me", likesCount: 49 }
    ]
  },
  messagesPage: {
    dialogsData: [
      { id: 1, name: "Vitalik", id_img: "1.png" },
      { id: 2, name: "Roma", id_img: "2.jpg" },
      { id: 3, name: "Sveta", id_img: "3.jpeg" },
      { id: 4, name: "Kazah", id_img: "4.jpg" },
      { id: 5, name: "Andrey", id_img: "5.jpg" }],
    messagesData: [
      { id: 1, text: "Hello", sex: "my" },
      { id: 1, text: "Hi", sex: "him", id_img: "1.png" },
      { id: 1, text: "How Are you?", sex: "my" }]
  },
  sidebar: {
    friendsData: [
      { id: 1, name: "Vitalik", id_img: "1.png" },
      { id: 2, name: "Roma", id_img: "2.jpg" },
      { id: 3, name: "Sveta", id_img: "3.jpeg" }
    ]
  }

}

export default state;