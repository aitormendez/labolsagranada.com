<header class="banner" id='banner'>
      <div class="campana bg-a text-center trans-after-page-load">
        @svg('campana')
      </div>

      <div class="brand bg-a trans-after-page-load">
        <p class="nombre">
          <a href="{{ home_url('/') }}">
            {{ get_bloginfo('name') }}
          </a>
        </p>
        <p class="descrip text-b">{{ get_bloginfo('description') }}</p>
      </div>

      <nav class="nav-tienda bg-a trans-after-page-load">
        @if (has_nav_menu('tienda_navigation'))
          {!! wp_nav_menu(['theme_location' => 'tienda_navigation', 'menu_class' => 'nav']) !!}
        @endif
        <div class="direccion">
          <p class="tel">{!! $direccion['tel'] !!}</p>
          <p class="dir1">{!! $direccion['dir_1'] !!}</p>
          @if (isset($direccion['dir_2']))
            <p class="dir2">{!! $direccion['dir_2'] !!}</p>
          @endif
          <p class="pobla">{!! $direccion['cp'] !!}. {!! $direccion['poblacion'] !!}</p>
        </div>
      </nav>

      <nav class="nav-primary trans-after-page-load">
        @if (has_nav_menu('primary_navigation'))
          {!! wp_nav_menu(['theme_location' => 'primary_navigation', 'menu_class' => 'nav', 'walker' => new \App\Walkers\lbg_navwalker()]) !!}
        @endif
      </nav>
</header>
