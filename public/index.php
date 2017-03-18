<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Todo</title>

        <?php
    		require_once('./lib/db.php');
    		Db::config( 'driver',   'mysql' );
    		Db::config( 'host',     $config['db']['hostname'] );
    		Db::config( 'database', $config['db']['dbname'] );
    		Db::config( 'user',     $config['db']['username'] );
    		Db::config( 'password', $config['db']['password'] );

        ?>

    </head>
    <body>
    <div id="app"></div>
    <script type="text/javascript" src="./build/bundle.js"></script>
    </body>
</html>
