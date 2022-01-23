


(async () =>{

    let data = [];

const search = async (search_query) =>{
            
    try{
        
         const res = await fetch(`http://universities.hipolabs.com/?query=${search_query}`);
          data = await res.json();
          data=data.web_pages
          display();

    }catch(e){
        console.log(e);
        console.log("Something is wrong in search");
    }
}


(async () =>{
    try{
        const current_location = window.location.href;
        const url_obj = new URL(current_location);
        const search_query = url_obj.searchParams.get('search_query');

        if(search_query == null || search_query == ""){
            const response = await fetch('http://universities.hipolabs.com/search');
               data = await response.json();
               
               display();
        }else{
            search(search_query);
        }
    }catch(e){
        console.log('error');
    }
})();

   const display = () =>{

       const container =   document.getElementById('container');
       container.innerHTML="";
       
       data.forEach(elem =>{
         
        const data_ctn = document.createElement('div');
        const a = document.createElement('a');
        a.href = elem.web_pages ;
        a.innerText  = `${elem.name},${elem.country}`;
        data_ctn.appendChild(a);
        container.appendChild(data_ctn);
       })
   }

})();