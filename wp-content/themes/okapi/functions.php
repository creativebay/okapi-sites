<?php

function my_theme_enqueue_styles()
{
    wp_enqueue_style('my_theme_style', get_template_directory_uri() . '/style.css');
}

add_action('wp_enqueue_scripts', 'my_theme_enqueue_styles');

add_editor_style('style.css');
add_editor_style('assets/fonts.css');
add_theme_support('align-wide');

function initCors($value): mixed
{
    header('Access-Control-Allow-Origin: ' . esc_url_raw(site_url()));
    header('Access-Control-Allow-Credentials: true');

    return $value;
}

add_action('rest_api_init', function () {
    remove_filter('rest_pre_serve_request', 'rest_send_cors_headers');
    add_filter('rest_pre_serve_request', 'initCors');
}, 15);