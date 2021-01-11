# POO

display: inline-block;
    border: #b66363 2px solid;
    padding: 10px;
    width: 400px;
    text-align: center;
    background-color: #ff5c5c54;
    color: #d32424;
    font-weight: bold;

    <% if(searchSucces){%> 
        <p class="alert alert-success text-center">this item costs 9.70 € and is available in the shop section</p>
    <%}%>
    <% if(searchEchec){%> 
        <p class="alert alert-danger text-center">this item is not available</p>
    <%}%> 