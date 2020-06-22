<header class="banner">
  <div class="container-fluid">
    <div class="row">
      <div class="campana bg-a col-12 py-5 text-center">
        @svg('campana')
      </div>

      <div class="brand bg-a col-12 my-0">
        <p class="nombre">
          <a href="{{ home_url('/') }}">
            {{ get_bloginfo('name') }}
          </a>
        </p>
        <p class="descrip text-b">{{ get_bloginfo('description') }}</p>
      </div>

      <nav class="nav-tienda bg-a col-12 text-center">
        @if (has_nav_menu('tienda_navigation'))
          {!! wp_nav_menu(['theme_location' => 'tienda_navigation', 'menu_class' => 'nav']) !!}
        @endif
        <div class="direccion d-inline-block">
          <p class="tel">{!! $direccion['tel'] !!}</p>
          <p class="dir1">{!! $direccion['dir_1'] !!}</p>
          @if (isset($direccion['dir_2']))
            <p class="dir2">{!! $direccion['dir_2'] !!}</p>
          @endif
          <p class="pobla">{!! $direccion['cp'] !!}. {!! $direccion['poblacion'] !!}</p>
        </div>
      </nav>

      <nav class="nav-primary col-12">
        @if (has_nav_menu('primary_navigation'))
          {!! wp_nav_menu(['theme_location' => 'primary_navigation', 'menu_class' => 'nav', 'walker' => new \App\Walkers\lbg_navwalker()]) !!}
        @endif
      </nav>

    </div>



  </div>
</header>
