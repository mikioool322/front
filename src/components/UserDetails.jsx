class UserDetails {
    userEmail;
    userName;
    description;
    phoneNumber;
    photo;
    gender;
    age;
    degree;

    constructor(userEmail,
        userName,
        description,
        phoneNumber,
        photo,
        gender,
        age,
        degree
    ) {
        this.userEmail = userEmail
        this.userName = userName
        this.description = description
        this.phoneNumber = phoneNumber
        this.photo = photo
        this.gender = gender
        this.age = age
        this.degree = degree
    }
}

export {
    UserDetails
};