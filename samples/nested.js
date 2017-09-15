//sample illustrating nested macros

@def print $a {console.log($a)}

@def ~($x) { (function(){return $x})() }

print ~(3)

// console.log((function(){return 3})())
