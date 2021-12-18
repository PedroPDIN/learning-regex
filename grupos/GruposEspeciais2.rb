# Os segundos grupos que no caso o "Lookbehind" que é o inverso do "lookahead" até o momento não funciona no JS mas si RUBY.

texto = 'supermercado superação hiperMERCADO Mercado'

puts texto.scan(/(?:super)[/wÁ-ú]+/i).join(' ')

# Positive Lookbehind = captura apenas os elementos propostos "(?<=)".
puts texto.scan(/(?<=super)[\wÀ-ú]+/i).join(' ')

# Negative Lookbehind = captura apenas os elementos que não pussui o elemento proposto "(?<!)".
puts texto.scan(/(?<!super)mercado/i)
