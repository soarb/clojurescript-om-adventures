(ns ^:figwheel-always om-tut.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            ;; :refer gets us only the specific functions
            ;; we want from the core.async package and we
            ;; get three functions put!, chan and <!
            [cljs.core.async :refer [chan <! put!]]
            [clojure.string :as string]))

(enable-console-print!)

(println "Edits to this text should show up in your developer console.")

;; define your app data so that it doesn't get over-written on reload

(defonce app-state 
  (atom
    {:contacts
      [{:first "Ben" :last "Bitdiddle" :email "benb@mit.edu"}
       {:first "Alyssa" :middle-initial "P" :last "Hacker" :email "aphacker@mit.edu"}
       {:first "Eva" :middle "Lu" :last "Ator" :email "eval@mit.edu"}
       {:first "Louis" :last "Reasoner" :email "prolog@mit.edu"}
       {:first "Cy" :middle-initial "D" :last "Effect" :email "bugs@mit.edu"}
       {:first "Lem" :middle-initial "E" :last "Tweakit" :email "morebugs@mit.edu"}]}))

(defn parse-contact [contact-str]
  (let [[first middle last :as parts] (string/split contact-str #"\s+")
        [first last middle] (if (nil? last) [first middle] [first last middle])
        middle (when middle (string/replace middle "." ""))
        c (if middle (count middle) 0)]
    ;; let body applies initials when the number of parts >= 2
    ;;
    (when (>= (count parts) 2)
      ;; take an expression in this case a map which we initialse with
      ;; first and last names keyed on :first and :last keywords which
      ;; we then apply a set of test/form pairs to; any test resulting
      ;; in true applies the form to the expression 
      (cond-> {:first first :last last}
        ;; test  form
        (== c 1) (assoc :middle-initial middle)
        ;; test  form
        (== c 2) (assoc :middle middle)))))        

(defn middle-name [{:keys [middle middle-initial]}]
  (cond
    middle (str " " middle)
    middle-initial (str " " middle-initial ".")))

(defn display-name [{:keys [first last] :as contact}]
  (str last ", " first (middle-name contact)))

(defn contact-view [contact owner]
  (reify
    om/IRenderState
    (render-state [this {:keys [delete]}]
      (dom/li nil 
        (dom/span nil (display-name contact))
        (dom/button #js {:onClick (fn [e] (put! delete @contact))} "Delete")))))

(defn contacts-view [data owner]
  ;; implement the react/om lifecycle functions we want to
  (reify
    om/IInitState
    (init-state [_]
      ;; we override this lifecycle method to provide intial state, (think these
      ;; translate to props) for the component; declare a map with a single :key
      ;; whose value is set to the result of invoking chan (creates a channel so
      ;; we can communicate with other components)    
      {:delete (chan)})
    om/IWillMount
    (will-mount [_]
      ;; first time this component is mounted we declare a locally scoped variable
      ;; which holds the core.async channel we created in init-state for the react
      ;; component (owner)
      (let [delete (om/get-state owner :delete)]
        ;; 'go' asynchronously executes the body, returning immediately to the
        ;; calling thread (also see go-loop)
        (go (loop []
          ;; block here until we get (<! is a get function) a contact
          ;; off of the delete channel - again 'contact' is scoped so
          ;; that it is only availble within the let block
          (let [contact (<! delete)]
            ;; data is the app-state atom passed in; we're about to
            ;; mutate it so we use the om/transact! function (which
            ;; ensures synchronisation, if multiple threads attempt
            ;; to write to or read from what we're about to mutate)
            ;;
            ;; note we're only extracting the value from data keyed
            ;; by :contacts
            (om/transact!
              ;; cursor into application state we want to mutate 
              data :contacts
              ;; function, which receives the piece of application state
              ;; (contacts) and allows us to mutate it
              (fn [contacts]
                ;; shouldn't store lazy collections/sequences in an atom
                ;; so we convert to a vector type 
                (vec (remove #(= contact %) contacts))))
            ;; invoke the loop again
            (recur))))))
    om/IRenderState
    (render-state [this {:keys [delete]}]
      (dom/div nil
        (dom/h2 nil "Contact list")
        (apply dom/ul nil
          (om/build-all contact-view (:contacts data)
            {:init-state {:delete delete}}))))))
      
(om/root
  ;; first argument, a function that must return an Om/React component
  contacts-view
  ;; second argument is the application state atom
  app-state
  ;; third argument is a map, it must contain a single key :target with
  ;; a DOM node as its value
  {:target (. js/document (getElementById "contacts"))})

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
