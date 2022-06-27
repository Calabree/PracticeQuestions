def caesar_cipher(phrase, shift)
  alphabet = "abcdefghijklmnopqrstuvwxyz".split('')
  new_phrase =[]
  phrase.split('').each do |letter|

    if alphabet.include?(letter)
      letter_index = alphabet.find_index(letter) + shift
      new_phrase.append(alphabet[letter_index])
    elsif /[[:upper:]]/.match(letter)
      letter_index = alphabet.find_index(letter.downcase) + shift
      new_phrase.append(alphabet[letter_index].capitalize)
    else 
      new_phrase.push(letter)
    end
    
  end
  print new_phrase.join('')<<"\n"
  
end

caesar_cipher("This is a test!",5)