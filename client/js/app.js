var map = $K.map('#map');

var ds = new Miso.Dataset({
  url : 'data.csv',
  delimiter : ','
});

ds.fetch({
  success : function() {
    console.log("Available Columns:" + this.columnNames());
    console.log("There are " + this.length + " rows");

    var colors = chroma.scale('Blues').domain(ds.column('Value').data, 10, 'quantiles');    
        
  function parishFill(data) {
  
    
    var d = ds.rows(function(row) {
            return row.Parish === data.id;
          }).rowByPosition(0);
    return colors(d.Value)
    
  /*
    var color = chroma.scale('Reds').domain(d.parish, 10, 'quantiles','value');    
    var result = $.grep(d.parish, function(e) { return data.id == e.id; });
    return color(result[0].value)
  */
//return '#333'
  }
  
map.loadMap('map.svg', function() {

  map.addLayer('country', {
    id: 'country-shadow',
    styles: {
      stroke: '#eee',
      'stroke-width': 10,
      'stroke-linejoin': 'round'
    }
  });
  
  map.addLayer('country', {
    styles: {
      'stroke-width': 3,      
      stroke: '#222',
      fill: '#fff'
    }
  });

    
  map.addLayer('parish', {
    chunks: 50,
    styles: {
      stroke: '#fff',
      fill: parishFill
    },
    click: function(data, path, event) {
      var d = ds.rows(function(row) {
              return row.Parish == data.id;
            }).rowByPosition(0);
      console.log(data,d)
    }
  });

  
}, {padding: 50});

  }
});


