var names=new Array();
names[0]="arman";
names[1]="mahi";
names[2]="Abhi";
names[3]="arps";
names[4]="aman";
names[5]="bharvi";
names[6]="dharini";
names[7]="Astha";
names[8]="riya";
names[9]="Anya";

for (var i = 0; i < names.length; i++)
{   
    if(names[i].charAt(0)==="A" || names[i].charAt(0)==='a')
    {
        console.log("goodbye -"+ names[i])
    }
    else(
        console.log("hello -" + names[i])
    )
}

