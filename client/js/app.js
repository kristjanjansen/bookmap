var map = $K.map('#map');

var ds = new Miso.Dataset({
  url : 'data.csv',
  delimiter : ','
});

ds.fetch({
  success : function() {

  var colors = chroma.scale('Blues').domain(ds.column('Value').data, 10, 'quantiles');    
        
  function parishFill(data) {
  
    
    var d = ds.rows(function(row) {
            return row.Parish === data.id;
          }).rowByPosition(0);
    return colors(d.Value)
    
  }
  
map.loadMap('map.svg', function() {
  
  map.addLayer('country', {
    styles: {
      'stroke-width': 4,      
      stroke: '#444',
      fill: '#fff'
    }
  });

    
  map.addLayer('parish', {
    mouseenter: function(data, path, event) {
      var d = ds.rows(function(row) {
              return row.Parish == data.id;
            }).rowByPosition(0);
      $('h1').html(data.id.replace(' vald', ':') + ' ' + (d.Value !== undefined ? d.Value : '?'))   
    },
    mouseleave: function(data, path, event) {
      $('h1').html('How many books?')   
    },
    chunks: 50,
    styles: {
      stroke: '#fff',
      fill: parishFill
    },
    click: function(data, path, event) {
      var d = ds.rows(function(row) {
              return row.Parish == data.id;
            }).rowByPosition(0);
    }
  });

  
}, {padding: 20});

  }
});


