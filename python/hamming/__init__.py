# Define your compute function here.
# run python -m unittest test.hamming_test to ensure the
# unit tests pass and your code meets all of the conditions.
#

def compute(input1, input2):
	if len(input1) != len(input2):
		 raise ValueError('lengths not equal') 
	diffs = 0
	for inp1, inp2 in zip(input1, input2):
	        if inp1 != inp2:
	                diffs += 1
	return diffs
