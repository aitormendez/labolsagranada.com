<footer class="content-info container-fluid">
  <div clas="row">
    <div class="navi col-md-8 offset-md-2 d-flex">
      @if (has_nav_menu('footer_navigation'))
    {!! wp_nav_menu(['theme_location' => 'footer_navigation', 'menu_class' => 'nav mb-5 mb-md-0']) !!}
      @endif
      @php dynamic_sidebar('sidebar-footer') @endphp

      <div class="logo">
        @svg('campana')
      </div>


      <div class="direccion text-b">
        <p class="nombre">
          <a href="{{ home_url('/') }}">
            {{ get_bloginfo('name') }}
          </a>
        </p>
        <p class="tel">{!! $direccion['tel'] !!}</p>
        <p class="dir1">{!! $direccion['dir_1'] !!}</p>
        @if (isset($direccion['dir_2']))
          <p class="dir2">{!! $direccion['dir_2'] !!}</p>
        @endif
        <p class="pobla">{!! $direccion['cp'] !!}. {!! $direccion['poblacion'] !!}</p>
      </div>
    </div>
  </div>
</footer>
