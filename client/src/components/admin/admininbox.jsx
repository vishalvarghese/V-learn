import React from 'react'
import Sidebar from './sidebar'
function admininbox() {
  return (
    <div
    id="view"
    class="h-full w-screen flex flex-row "
    x-data="{ sidenav: true }" >
  
  {/* side bar */}
  <div>{<Sidebar/>}</div>

  {/* <div className='flex justify-center w-full items-center'>
    <h2 className='text-blue-900 font-bold text-4xl'>Message inbox</h2>
  </div> */}
      
      <div>
      <div className="container p-2 w-3/4 h-3/4 mx-auto sm:p-4 dark:text-gray-100">
	<h2 className="mb-4 text-2xl font-semibold leading-tight">Messages</h2>
	<div className="flex flex-col overflow-x-auto text-xs">
		<div className="flex text-left dark:bg-gray-700">
			<div className="flex items-center justify-center w-8 px-2 py-3 sm:p-3">
				<input type="checkbox" name="All" className="w-3 h-3 rounded-sm accent-violet-400" />
			</div>
			<div className="w-32 px-2 py-3 sm:p-3">Sender</div>
			<div className="flex-1 px-2 py-3 sm:p-3">Message</div>
			<div className="hidden w-24 px-2 py-3 text-right sm:p-3 sm:block">Received</div>
		</div>
		<div className="flex border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
			<div className="flex items-center justify-center w-8 px-2 py-3 sm:p-3">
				<input type="checkbox" className="w-3 h-3 rounded-sm accent-violet-400" name="Box0" />
			</div>
			<div className="w-32 px-2 py-3 sm:p-3">
				<p>Tracy Kim</p>
			</div>
			<div className="flex-1 block px-2 py-3 truncate sm:p-3 sm:w-auto">An cum minimum voluptua repudiandae, nec illum essent et. Id tibique voluptatum per, eos eu civibus mnesarchum intellegam. An mundi detracto usu, diceret deserunt lobortis te cum.</div>
			<div className="hidden w-24 px-2 py-3 text-right sm:p-3 sm:block dark:text-gray-400">
				<p>5min ago</p>
			</div>
		</div>
		<div className="flex border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
			<div className="flex items-center justify-center w-8 px-2 py-3 sm:p-3">
				<input type="checkbox" className="w-3 h-3 rounded-sm accent-violet-400" name="Box1" />
			</div>
			<div className="w-32 px-2 py-3 sm:p-3">
				<p>Katherine Rojas</p>
			</div>
			<div className="flex-1 block px-2 py-3 truncate sm:p-3 sm:w-auto">At nam diceret intellegam, diam delicatissimi eu nam. Vivendo adolescens dissentiet cum ex, fuisset percipit eum ne. Unum officiis invenire vix ex.</div>
			<div className="hidden w-24 px-2 py-3 text-right sm:p-3 sm:block dark:text-gray-400">
				<p>37min ago</p>
			</div>
		</div>
		<div className="flex border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
			<div className="flex items-center justify-center w-8 px-2 py-3 sm:p-3">
				<input type="checkbox" className="w-3 h-3 rounded-sm accent-violet-400" name="Box2" />
			</div>
			<div className="w-32 px-2 py-3 sm:p-3">
				<p>Santiago Mcguire</p>
			</div>
			<div className="flex-1 block px-2 py-3 truncate sm:p-3 sm:w-auto">Quis graeci ex mea. Sed ea odio similique. Enim porro persius et usu, et sea partem melius sententiae, mea viderer fuisset id.</div>
			<div className="hidden w-24 px-2 py-3 text-right sm:p-3 sm:block dark:text-gray-400">
				<p>1h ago</p>
			</div>
		</div>
		{/* <div className="flex border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
			<div className="flex items-center justify-center w-8 px-2 py-3 sm:p-3">
				<input type="checkbox" className="w-3 h-3 rounded-sm accent-violet-400" name="Box3" />
			</div>
			<div className="w-32 px-2 py-3 sm:p-3">
				<p>Keaton Collins</p>
			</div>
			<div className="flex-1 block px-2 py-3 truncate sm:p-3 sm:w-auto">Vix an ullum fuisset, ad nominati intellegat signiferumque qui, vidit dolores rationibus id est. Quo ei assum option, ludus invenire dignissim et mea.</div>
			<div className="hidden w-24 px-2 py-3 text-right sm:p-3 sm:block dark:text-gray-400">
				<p>3h ago</p>
			</div>
		</div> */}
		{/* <div className="flex border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
			<div className="flex items-center justify-center w-8 px-2 py-3 sm:p-3">
				<input type="checkbox" className="w-3 h-3 rounded-sm accent-violet-400" name="Box4" />
			</div>
			<div className="w-32 px-2 py-3 sm:p-3">
				<p>Ana Stevenson</p>
			</div>
			<div className="flex-1 block px-2 py-3 truncate sm:p-3 sm:w-auto">Vis sanctus gubergren abhorreant ea, eu melius percipit legendos mei, vulputate temporibus qui ut. Eu eam sumo putent discere, id vim feugiat lobortis democritum, fabellas invidunt mnesarchum at duo.</div>
			<div className="hidden w-24 px-2 py-3 text-right sm:p-3 sm:block dark:text-gray-400">
				<p>8h ago</p>
			</div>
		</div> */}
		<div className="flex border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
			<div className="flex items-center justify-center w-8 px-2 py-3 sm:p-3">
				<input type="checkbox" className="w-3 h-3 rounded-sm accent-violet-400" name="Box5" />
			</div>
			<div className="w-32 px-2 py-3 sm:p-3">
				<p>Elliott Mejia</p>
			</div>
			<div className="flex-1 block px-2 py-3 truncate sm:p-3 sm:w-auto">Pri habeo eligendi at, ex quidam probatus sed, ei cum mentitum mnesarchum. Ex est purto congue. Unum soluta tritani in eam, habemus percipit vim an. Duo ad tota voluptaria dissentias, an eum bonorum maiestatis, alia habeo imperdiet ex vix.</div>
			<div className="hidden w-24 px-2 py-3 text-right sm:p-3 sm:block dark:text-gray-400">
				<p>yesterday</p>
			</div>
		</div>
		<div className="flex border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
			<div className="flex items-center justify-center w-8 px-2 py-3 sm:p-3">
				<input type="checkbox" className="w-3 h-3 rounded-sm accent-violet-400" name="Box6" />
			</div>
			<div className="w-32 px-2 py-3 sm:p-3">
				<p>Riley Nunez</p>
			</div>
			<div className="flex-1 block px-2 py-3 truncate sm:p-3 sm:w-auto">Con no error impedit definitionem, qui sanctus detraxit vulputate id. Et natum eligendi moderatius vis. Pro ea mazim nominati delicata, per ad melius vituperatoribus. Ad dolor signiferumque nam, eam justo adipisci argumentum ut.</div>
			<div className="hidden w-24 px-2 py-3 text-right sm:p-3 sm:block dark:text-gray-400">
				<p>2 days ago</p>
			</div>
		</div>
		<div className="flex border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
			<div className="flex items-center justify-center w-8 px-2 py-3 sm:p-3">
				<input type="checkbox" className="w-3 h-3 rounded-sm accent-violet-400" name="Box7" />
			</div>
			<div className="w-32 px-2 py-3 sm:p-3">
				<p>Garret Ramsey</p>
			</div>
			<div className="flex-1 block px-2 py-3 truncate sm:p-3 sm:w-auto">Justo homero similique eu his, oratio libris et vix. Eu eruditi conceptam cum, ius id cibo impetus consectetuer, lorem everti contentiones pri ne. Aperiam utroque pri ex, eu sit quodsi quaestio persecuti. </div>
			<div className="hidden w-24 px-2 py-3 text-right sm:p-3 sm:block dark:text-gray-400">
				<p>4 days ago</p>
			</div>
		</div>
		<div className="flex border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
			<div className="flex items-center justify-center w-8 px-2 py-3 sm:p-3">
				<input type="checkbox" className="w-3 h-3 rounded-sm accent-violet-400" name="Box8" />
			</div>
			<div className="w-32 px-2 py-3 sm:p-3">
				<p>Brittney Hill</p>
			</div>
			<div className="flex-1 block px-2 py-3 truncate sm:p-3 sm:w-auto">Eu nemore apeirian menandri mea, maiestatis assueverit sit an. Vel deserunt voluptaria reprimique ex, deserunt adversarium ad his, usu nibh legimus fierent in.</div>
			<div className="hidden w-24 px-2 py-3 text-right sm:p-3 sm:block dark:text-gray-400">
				<p>5 days ago</p>
			</div>
		</div>
		<div className="flex border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
			<div className="flex items-center justify-center w-8 px-2 py-3 sm:p-3">
				<input type="checkbox" className="w-3 h-3 rounded-sm accent-violet-400" name="Box9" />
			</div>
			<div className="w-32 px-2 py-3 sm:p-3">
				<p>Kendall Valdez</p>
			</div>
			<div className="flex-1 block px-2 py-3 truncate sm:p-3 sm:w-auto">Ea mea ornatus menandri lobortis. Meis eripuit disputationi usu in, at vix possim conceptam, ne deleniti corrumpit quo. No usu sint praesent, cu eos iusto mollis, ad saepe praesent has. </div>
			<div className="hidden w-24 px-2 py-3 text-right sm:p-3 sm:block dark:text-gray-400">
				<p>1 week ago</p>
			</div>
		</div>
		<div className="flex border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
			<div className="flex items-center justify-center w-8 px-2 py-3 sm:p-3">
				<input type="checkbox" className="w-3 h-3 rounded-sm accent-violet-400" name="Box10" />
			</div>
			<div className="w-32 px-2 py-3 sm:p-3">
				<p>Gabrielle Shelton</p>
			</div>
			<div className="flex-1 block px-2 py-3 truncate sm:p-3 sm:w-auto">Sed no mazim indoctum, labores mediocrem no vel. Quo no velit aperiam urbanitas, ea est noster impedit. Ius no exerci vivendo nominavi, an mel paulo dolorum. Sit et quaeque dolorum pertinax.</div>
			<div className="hidden w-24 px-2 py-3 text-right sm:p-3 sm:block dark:text-gray-400">
				<p>1 week ago</p>
			</div>
		</div>
		<div className="flex border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
			<div className="flex items-center justify-center w-8 px-2 py-3 sm:p-3">
				<input type="checkbox" className="w-3 h-3 rounded-sm accent-violet-400" name="Box11" />
			</div>
			<div className="w-32 px-2 py-3 sm:p-3">
				<p>Kameron Waters</p>
			</div>
			<div className="flex-1 block px-2 py-3 truncate sm:p-3 sm:w-auto">No vel voluptua corrumpit, vim iudico ceteros imperdiet ex. An sea commune mediocrem, alii paulo ridens pro at, veri erant prompta id his.</div>
			<div className="hidden w-24 px-2 py-3 text-right sm:p-3 sm:block dark:text-gray-400">
				<p>2 weeks ago</p>
			</div>
		</div>
	</div>
</div>
      </div>
        

  </div>
  )
}

export default admininbox
