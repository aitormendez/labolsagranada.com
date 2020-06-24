@extends('layouts.app')

@section('content')

<div class="container-fluid">
      @php
        do_action('get_header', 'shop');
        do_action('woocommerce_before_main_content');
      @endphp

  <div class="row">
    <div class="col-md-8 offset-md-2">
      @while(have_posts())
        @php
          the_post();
          do_action('woocommerce_shop_loop');
          wc_get_template_part('content', 'single-product');
        @endphp
      @endwhile

      @php
        do_action('woocommerce_after_main_content');
        do_action('get_sidebar', 'shop');
        do_action('get_footer', 'shop');
      @endphp
    </div>
  </div>

</div>
@endsection
