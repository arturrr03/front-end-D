let BMI ={
    firstName : "Artur",
    berat : "81",
    tinggi : "1.81",
    Calculate : function(){
       let BMI1 = this.berat / (this.tinggi*this.tinggi); 
        if (BMI1<16.0){
            console.log("Severly Underweight");
        }else if (BMI1 >=16.0 && BMI1 < 18.4){
            console.log("Underweight");
        }else if (BMI1 >=18.5 && BMI1 < 24.9){
            console.log("Normal")
        }else if (BMI1 >=25.0 && BMI1 < 29.9 ){
            console.log("Overweight")
        }else if (BMI1 >=30.0 && BMI1 < 34.9 ){
            console.log("Moderately Obese")
        }else if (BMI1 >=35.0 && BMI1 < 39.9 ){
            console.log("Severely Obese")
        }else{
            console.log("Morbidly Obese")
        }
    },
};
console.log(BMI);
console.log(BMI.Calculate());

