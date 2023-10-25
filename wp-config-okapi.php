<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'okapi_sites' );

/** Database username */
define( 'DB_USER', '' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', '127.0.0.1' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );


define( 'WP_ALLOW_MULTISITE', true );
define( 'MULTISITE', true );
define( 'SUBDOMAIN_INSTALL', true );
define( 'DOMAIN_CURRENT_SITE', 'flying-start.myokapi.com' );
define( 'PATH_CURRENT_SITE', '/' );
define( 'SITE_ID_CURRENT_SITE', 1 );
define( 'BLOG_ID_CURRENT_SITE', 1 );

define( 'COOKIE_DOMAIN', '.myokapi.com' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '!]X+QuG)2]tPCG)R7@JhzL$x!$:_YUU*S+64`{.^(,9CA14^=zV$ x1tO2)sERmq' );
define( 'SECURE_AUTH_KEY',  'jxY<WGj&&3L1m#9bi&Veer=^i%u/;/SF[4x!E4[Ko4W0C?_`ctkIgSk`.ScmeB,P' );
define( 'LOGGED_IN_KEY',    '5S38R;bip.$nkt6E7i(8^jF84i%}o4y5G@2{WXAVX!EfQ#4LNw0%%NZV~iMvkOt!' );
define( 'NONCE_KEY',        '5aQb{eg3k)fjjoprqTr#kEKKm3NawXq?tdIAoYz;.NBH#{M_+I8~^Y9(A~=)Xz~B' );
define( 'AUTH_SALT',        '~02DT(}n #~sT#qMn*#@Q[DLM!k[[/ylEQdJ*!3g-0c4L.pYxCdhJ&:ep%8U+?5}' );
define( 'SECURE_AUTH_SALT', '|AqkubxIIBenO0myxfbhqXuY4VbY|hnUg2#=A,*? 8DZ>]&#nzC#a)1)-NWZDGk=' );
define( 'LOGGED_IN_SALT',   'Z>DkI7Q>R/<D+1G-X#D=H!XV?PT$;#`Vz0U8DbUZ$R/Dpa;+MzIMt_0w:T!G|iIC' );
define( 'NONCE_SALT',       'q*#ssu kwISUS/*qR?MnNrbwj[sR)sux>0Y2sm~%tQZz)F[4/vplucb:ZS/Z0Ia8' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */

/* Add any custom values between this line and the "stop editing" line. */

define('WP_DEBUG', false);

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
