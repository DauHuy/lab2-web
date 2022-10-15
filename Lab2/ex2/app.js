var dob = new Date();   
    var month_diff = Date.now() - dob.getTime();    
    var age_dt = new Date(month_diff);     
    var year = age_dt.getUTCFullYear();   
    var age = Math.abs(year - 1970);  
    document.write("Age: " + age);  