var names=new Array();
names[0]="VIKRAM";
names[1]="John";
names[2]="CADBURY";
names[3]="MILK";
names[4]="AMUL";
names[5]="BISUT";
names[6]="MAHESH";
names[7]="NAGARJUNA";
names[8]="RAM";
names[9]="SAM";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}