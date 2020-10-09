		var prime_numbers = [],data='';
		/* Function checks if number is prime*/
		const isPrime = (num) =>{
			if(num <=1) return false;
			if(num == 2) return true;
			for(let i = 2;i<num;i++){
				if(num % i === 0){
					return false;
				}
				else{
					return true;
				}
			}
		}
		
		const table_data = () =>{
		for(var t =1;t<20;t++){
			if(prime_numbers.length == 10) break;/* If number of array elements = 10, break out of loop */
			if(isPrime(t)) prime_numbers.push(t);
		}
		for(var r=0;r<=prime_numbers.length;r++){
			data +='<tr>';
			for(var c=0;c<=prime_numbers.length;c++){
				if(r == 0 && c >=0 && c <prime_numbers.length){
					if(c == 0) data += '<th>' + '' + '</th>';
					data += '<th>' + prime_numbers[c] + '</th>';
				}
				else if( c == 0 && r>0){
					data += '<th>' + prime_numbers[r-1] + '</th>';
				}
				else if (r>0 && c>0){
					data += '<td>' + (prime_numbers[r-1]*prime_numbers[c-1]) + '</td>';
				}
			}
			data += '</tr>';
			}
			return data;
		}