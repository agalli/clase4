function crearFichero(){
    window.requestFileSystem(window.PERSISTENT, 1024*1024, function(fs){
        fs.root.getFile("NuestroArchivo.txt",{
            create:true,
            exclusive:true
        }, function(fileEntry){
            alert(fileEntry.fullPath);
        },errorHandler);
    });
}
function escribirFichero(){
    window.requestFileSystem(window.PERSISTENT, 1024*1024, function(fs){
        fs.root.getFile("NuestroArchivo.txt",{
            create:false
        }, function(fileEntry){
            fileEntry.createWriter(function(fileWriter){
                fileWriter.onwriteend=function(e){
                    alert("archivo escrito");
                };
                fileWriter.onerror=function(e){
                    alert("Error: "+e.toString());
                };
                fileWriter.write("estamos añadiendo texto");
            },errorHandler);
        },errorHandler);
    });    
}
function leerFichero(){
    window.requestFileSystem(window.PERSISTENT, 1024*1024, function(fs){
        fs.root.getFile("NuestroArchivo.txt",{}, function(fileEntry){
            fileEntry.file(function(file){
                var reader=new FileReader();
                reader.onloadend=function(e){
                  alert(this.result)  
                }
                reader.readAsText(file)
            },errorHandler);
        },errorHandler);
    });
}
function anhadirTextoAlFichero(){
        window.requestFileSystem(window.PERSISTENT, 1024*1024, function(fs){
        fs.root.getFile("NuestroArchivo.txt",{
            create:false
        }, function(fileEntry){
            fileEntry.createWriter(function(fileWriter){
                fileWriter.seek(fileWriter.length);
                fileWriter.write("\neste texto ha sido añadido a continuacion");
                alert("Texto añadido");
            },errorHandler);
        },errorHandler);
    });    
}
function eliminarFichero(){
    window.requestFileSystem(window.PERSISTENT, 1024*1024, function(fs){
        fs.root.getFile("NuestroArchivo.txt",{
            create:false
        }, function(fileEntry){
            fileEntry.remove(function(){
                alert("el archivo a sido borrado");
            },errorHandler);
        },errorHandler);
    });
}
function errorHandler(e){
    alert(e);
}
function alert(message) {
    new Windows.UI.Popups.MessageDialog(message).showAsync();
}
