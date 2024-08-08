<?php

function obtener_servicios(){
    try{
        require 'database.php';
        $sql = "SELECT * FROM servicios;";

        $consulta = mysqli_query($db,$sql);

        return $consulta;

    } catch (Throwable $th) {
        var_dump($th);
    }
}

obtener_servicios();