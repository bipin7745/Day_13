
            function addUser(event) {
                event.preventDefault(); 
                let FirstName = document.getElementById("FirstName").value;
                let LastName = document.getElementById("LastName").value;
                let Email = document.getElementById("Email").value;
                let Phone = document.getElementById("Phone").value;
                let city = document.getElementById("city").value;
                let pincode = document.getElementById("pincode").value;

                if(FirstName && LastName && Email && Phone && city && pincode) {
                    alert("User added successfully!");
                }
                 else {
                    alert("Please fill in all fields.");
                    return;
                }
                 if(!Email.includes("@") || !Email.includes(".")) {
                    alert("Please enter a valid email address.");
                    return;
                }   

                if(Phone.length !== 10 || isNaN(Phone)) {
                    alert("Please enter a valid 10-digit phone number.");
                    return;
                }
                if(pincode.length !== 6 || isNaN(pincode)) {
                    alert("Please enter a valid 6-digit pincode.");
                    return;
                }

                document.getElementById("userList").innerHTML += `<table border="2-px" cellpadding="14.5px" >
                <tr>
                    <td>${FirstName}</td>
                    <td>${LastName}</td>
                    <td>${Phone}</td>
                    <td>${Email}</td>
                    <td>${city}</td>
                    <td>${pincode}</td>
                </tr>
            </table>`;
                document.getElementById("userForm").reset();
            }

