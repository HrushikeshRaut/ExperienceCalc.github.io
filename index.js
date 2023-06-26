// function view() 
// {
//   let join_date = document.querySelector("#date_join").value;
//   let join_month = document.querySelector("#month_join").value;
//   let join_year = document.querySelector("#year_join").value;

//   let leave_date = document.querySelector("#leave_date").value;
//   let leave_month = document.querySelector("#leave_month").value;
//   let leave_year = document.querySelector("#leave_year").value;

//   let years = parseInt(leave_year) - parseInt(join_year);
//   let months = parseInt(join_month) + parseInt(leave_month);
//   let days = parseInt(join_date) + parseInt(leave_date);

//   if (months > 12 ) 
//   {
//     years = years + 1;
//     months = months - 12 ;
//     if(days >=30)
//     {
//         months = months + 1 ;
//         days = days - 31 ;
//     }
//     document.querySelector("#show").innerHTML ="experience is of " +years +" years " +months +" months " + days + " days ";
//   }
// }

function diff()
{
    let year = document.querySelector("#years_1").value;
    let months = document.querySelector("#month_1").value;
    let days = document.querySelector("#days_1").value;

    let year_1 = document.querySelector("#years_2").value;
    let months_1 = document.querySelector("#month_2").value;
    let days_1= document.querySelector("#days_2").value;

    let exact_year = parseInt(year) + parseInt(year_1);
    let exact_month = parseInt(months) + parseInt(months_1);
    let exact_days = parseInt(days) + parseInt(days_1);
   
    if (exact_days > 31 )
    {
  
        exact_month = exact_month + 1;
        exact_days = exact_days - 31 ;
        if(exact_month > 12)
        {
        
            exact_year = exact_year + 1 ;
            exact_month = exact_month - 12 ;
        }
     
        document.querySelector("#show-diff").innerHTML = ("candidate has experience of " + exact_year + " years " + exact_month + " months " + exact_days + " days ");
    }
    else
    {
        document.querySelector("#show-diff").innerHTML = ("candidate have experience of " + exact_year + " years " + exact_month + " months " + exact_days + " days ");
    }
   
}
