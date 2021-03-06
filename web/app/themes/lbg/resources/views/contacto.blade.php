{{--
  Template Name: Contacto
--}}

@extends('layouts.app')

@section('content')
  @while(have_posts()) @php the_post() @endphp
    <div class="content-fluid">

      <div-row>
        <div class="col-md-8 offset-md-2">
          @include('partials.page-header')
        </div>
        <div class="col-md-8 offset-md-2">
          @include('partials.content-page')
        </div>
      </div-row>
    </div>
  @endwhile

  <div class="content-fluid">
    <div-row>
      <div id="map" class="col-12">
      </div>
    </div-row>
  </div>
@endsection
