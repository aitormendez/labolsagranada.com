<?php

namespace App\Walkers;

class lbg_navwalker extends \Walker_Nav_Menu {

    function start_el(&$output, $item, $depth=0, $args=array(), $id = 0) {
        $object = $item->object;
        $type = $item->type;
        $title = $item->title;
        $description = $item->description;
        $permalink = $item->url;
        $slug = $item->slug;
        $id = $item->ID;

        $output .= "<li class='" .  implode(" ", $item->classes) . "'>";

        //Add SPAN if no Permalink
        if( $permalink && $permalink != '#' ) {
            $output .= '<a href="' . $permalink . '" data-tippy-content="'. $title .'">';
        } else {
            $output .= '<div>';
        }

        if ($depth == 0) {
            $icon = get_field( "menu_icon", $id );
            if( $icon ) {
            $output .= '
            <span class="fa-layers fa-fw">
            <i class="' . $icon . '-bg bg" aria-hidden="true"></i>
            <i class="' . $icon . '" aria-hidden="true"></i>
            </span>';
            } else {
                $output .= '<span class="epi">' . $title . '</span>';
            }
        }




        if( $permalink && $permalink != '#' ) {
            $output .= '</a>';
        } else {
            $output .= '</div>';
        }

        return $output;
    }

}
