currentAction='add';
editInd=-1;

nameObj=document.getElementById("name");
dobObj=document.getElementById("dob");
emailObj=document.getElementById("email");
mobileObj=document.getElementById("mobile");
genderObj=document.getElementById("gender");
skillsObj=document.getElementById("skills");
triggerObj=document.getElementById("trigger");
        
records=[];

render();

function createRecord()
{
    if(currentAction=='add')
    {
        o={name:nameObj.value,dob:dobObj.value,email:emailObj.value,mobile:mobileObj.value,
        gender:genderObj.value,skills:skillsObj.value}
        records.push(o);
        console.log(records);
    }
    else(currentAction=='edit')
    {
    o={name:nameObj.value,dob:dobObj.value,email:emailObj.value,mobile:mobileObj.value,
    gender:genderObj.value,skills:skillsObj.value}
    records[editInd]=o;       
    currentAction='add';
    triggerObj.innerHTML='Register';         
    }
    render();
}
function render()
{
    html=''
    for(i=0;i<records.length;i++)
    {
        html+=`<div class='card' onclick='initiateEdit(${i})'>
        <div onclick='deleteRecord(${i})' class='close'>X</div>
        <div class='name'>${records[i].name}</div>
        <div class='dob'>${records[i].dob}</div>
        <div class='email'>${records[i].email}</div>
        <div class='mobile'>${records[i].mobile}</div>
        <div class='gender'>${records[i].gender}</div>
        <div class='skills'>${records[i].skills}</div>                                         
        </div>`
    }
    document.getElementById('demo').innerHTML=html;
}
function deleteRecord(ind)
{
    ans=confirm(`Are you sure want to Delete ${records[ind].name}?`)
    if(ans)
    {
        records.splice(ind,1);
        console.log("After deleting=",records);
        render();
    }
}
function initiateEdit(ind)
{
    obj=records[ind];

    nameObj.value=obj.name
    dobObj.value=obj.dob;
    emailObj.value=obj.email;
    mobile.value=obj.mobile;
    gender.value=obj.gender;
    skills.value=obj.skill;     
            
    triggerObj.innerHTML="Update Record";
    currentAction="edit";
    editInd=ind;
}