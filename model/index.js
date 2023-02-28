let db = require('../config');

let {hash, compare, hashSync} = require('bcrypt');

let {createToken} = require('../middleware/AuthenticatedUser');

class User{
    login(req, res) {
        const {emailAdd, userPass} = req.body;
        const strQry =
        `
        SELECT userID, firstName, lastName, gender, cellphoneNumber, emailAdd, userPass, userRole, userProfile, joinDate
        FROM Users
        WHERE emailAdd = ${emailAdd};
        `;
        db.query(strQry, async(err, data)=>{
            if(err) throw err;
            if((!data) || (data == null)){
                res.status(401).json({err: "You provided a wrong email address"});
            }else{
                await compare(userPass, data[0].userPass,
                (cErr, cResult)=>{
                    if(cErr) throw cErr;

                    const jwToken = createToken({
                        emailAdd, userPass
                    });

                    request.cookie('LegitUser', jwToken, {
                        maxAge: 3600000,
                        httpOnly: true
                    })
                    if(cResult){
                        request.status(200).json({
                            msg: "Logged in",
                            jwToken,
                            result: data[0]
                        })
                    }else{
                        request.status(401).json({
                            err: "You entered an invalid password or did not register."
                        })
                    }
                })
            }
        })
    }
    fetchUser(req, res){
        const strQry =
        `
        SELECT userID, firstName, lastName, gender, cellphoneNumber, emailAdd, userPass, userRole, userProfile, joinDate
        FROM Users;
        `
        db.query(strQry, (err, data)=>{
            if(err) throw err;
            else res.status(200).json({results: data})
        })
    }
    fetchUser(req, res){
        const strQry =
        `
        SELECT userID, firstName, lastName, gender, cellphoneNumber, emailAdd, userRole, userProfile, joinDate
        FROM Users
        WHERE UserID = ?;
        `
        db.query(strQry,[req.params.id], (err, data)=>{
            if(err) throw err;
            else res.status(200).json({result: data})
        })
    }
    async createUser(req, res){
        let detail = req.body;
        detail.userPass = await
        hash(detail.userPass, 15);
        let user = {
            emailAdd: detail.emailAdd,
            userPass: detail.userPass
        }
        
    }
}

