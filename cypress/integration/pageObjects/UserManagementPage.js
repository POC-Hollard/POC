class UserManagementPage{

    getCreateUser(){
        return cy.contains('CREATE USER');
    }

}

export default UserManagementPage;