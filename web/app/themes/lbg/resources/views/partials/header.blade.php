<header class="banner">
  <div class="container-fluid">
    <div class="row">
      <div class="campana bg-a col-12 py-5 text-center">
        @svg('campana')
      </div>

      <div class="brand bg-a col-12 my-0">
        @dump($direccion)
        <p class="nombre">
          <a class="text-w" href="{{ home_url('/') }}">
            {{ get_bloginfo('name') }}
          </a>
        </p>
        <p class="descrip text-w">{{ get_bloginfo('description') }}</p>
      </div>

      <nav class="nav-tienda bg-a col-12">
        @if (has_nav_menu('tienda_navigation'))
          {!! wp_nav_menu(['theme_location' => 'tienda_navigation', 'menu_class' => 'nav']) !!}
        @endif
      </nav>

      <nav class="nav-primary col-12">
        @if (has_nav_menu('primary_navigation'))
          {!! wp_nav_menu(['theme_location' => 'primary_navigation', 'menu_class' => 'nav', 'walker' => new \App\Walkers\lbg_navwalker()]) !!}
        @endif
      </nav>

    </div>



  </div>
</header>
