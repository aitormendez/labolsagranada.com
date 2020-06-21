<?php

namespace App\Controllers;

use Sober\Controller\Controller;

class App extends Controller
{
    public function siteName()
    {
        return get_bloginfo('name');
    }

    public static function title()
    {
        if (is_home()) {
            if ($home = get_option('page_for_posts', true)) {
                return get_the_title($home);
            }
            return __('Latest Posts', 'sage');
        }
        if (is_archive()) {
            return get_the_archive_title();
        }
        if (is_search()) {
            return sprintf(__('Search Results for %s', 'sage'), get_search_query());
        }
        if (is_404()) {
            return __('Not Found', 'sage');
        }
        return get_the_title();
    }

    public function direccion()
    {
        $dir_1 = get_option( 'woocommerce_store_address', '' );
        $dir_2 = get_option( 'woocommerce_store_address_2', '' );
        $poblacion = get_option( 'woocommerce_store_city', '' );
        $cp = get_option( 'woocommerce_store_postcode', '' );

        $output = [
            'dir_1' => $dir_1,
            'poblacion' => $poblacion,
            'cp' => $cp,
        ];

        if($dir_2 != '') {
            $output += ['dir_2' => $dir_2];
        }

        return $output;
    }
}
