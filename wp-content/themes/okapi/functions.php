<?php 

function my_theme_enqueue_styles() {
    wp_enqueue_style( 'my_theme_style', get_template_directory_uri() . '/style.css' );
}

add_action( 'wp_enqueue_scripts', 'my_theme_enqueue_styles' );

add_editor_style('style.css');

add_theme_support ('align-wide');